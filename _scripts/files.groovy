#!/usr/bin/env groovy

@Grapes( @Grab('org.ccil.cowan.tagsoup:tagsoup:1.2') )

import org.ccil.cowan.tagsoup.Parser

import java.math.RoundingMode;

String ENCODING = "UTF-8"

def cli = new CliBuilder(usage: 'files [url]')

def options = cli.parse(args)

String url = "https://drive.google.com/folderview?id=0B546LAVv_zbxfkRQVnEwdmFYa2sxOHhiOWxJM2h2U1dSUkx2enBMekl5RTRYNjVBZGsta2M&usp=drive_web"

println "Scraping ${url}..."

def parser = new XmlSlurper(new Parser() )

List files = []

String baseUrl = url.take(url.indexOf('/', url.indexOf('://')+3))

new URL(url).withReader (ENCODING) { reader ->
    def document = parser.parse(reader)

    document.'**'.findAll { it.@class == 'flip-entry' }.each{
      Map file = [:]
      String id = it.@id.toString().replace('entry-','')
      file.url = "https://drive.google.com/file/d/${id}/view?pli=1"
      file.name = it.'**'.find{ it.@class == 'flip-entry-title' }.text()
      file.thumbnail = it.'**'.find{ it.@class == 'flip-entry-thumb' }.img.@src

      files << file
    }
}

"mkdir -p out".execute()

File yaml = new File('./out/files.yml')
yaml.write('---\n')
files.each{ file ->
  yaml << "- name: ${file.name}\n"
  yaml << "  thumb: ${file.thumbnail}\n"
  yaml << "  url: ${file.url}\n\n"
}
