#!/usr/bin/env groovy
import com.cloudinary.*
import com.cloudinary.utils.ObjectUtils
@Grapes( @Grab('org.ccil.cowan.tagsoup:tagsoup:1.2') )

import org.ccil.cowan.tagsoup.Parser

//import javax.swing.text.html.parser.Parser
import java.math.RoundingMode;

String ENCODING = "UTF-8"

def cli = new CliBuilder(usage: 'files [url]')

def options = cli.parse(args)

String url = "https://drive.google.com/folderview?id=0B546LAVv_zbxfkRQVnEwdmFYa2sxOHhiOWxJM2h2U1dSUkx2enBMekl5RTRYNjVBZGsta2M&usp=drive_web"

println "Scraping ${url}..."

def parser = new XmlSlurper(new Parser() )

//Cloudinary cloudinary = new Cloudinary([
//        cloud_name: "phwash",
//        api_key: "332339313425726",
//        api_secret: "pRTqGZSKb9LZwgB7-yLbU50xNPk"
//])

List files = []

String baseUrl = url.take(url.indexOf('/', url.indexOf('://')+3))
"mkdir -p ../images/pdf".execute()
new URL(url).withReader (ENCODING) { reader ->
    def document = parser.parse(reader)

    document.'**'.findAll { it.@class == 'flip-entry' }.each {
        Map file = [:]
        String id = it.@id.toString().replace('entry-', '')
        file.url = "https://drive.google.com/file/d/${id}/view?pli=1"
        String name = it.'**'.find { it.@class == 'flip-entry-title' }.text().replaceFirst(~/\.[^\.]+$/, '')
        file.name = name
        Map params = ObjectUtils.asMap("public_id", "news-letter/" + name)
//        Map uploadResult = cloudinary.uploader().upload(it.'**'.find{ it.@class == 'flip-entry-thumb' }.img.@src.text(), params)
        String imageURL = it.'**'.find { it.@class == 'flip-entry-thumb' }.img.@src.text()
        File imageFile = new File("../images/pdf/${name}.jpg")
        imageFile.bytes = new URL(imageURL).bytes
        file.thumbnail = imageFile.path
        files << file
    }
}

//"mkdir -p out".execute()

File yaml = new File('../_data/files.yml')
yaml.write('')
files.each{ file ->
    yaml << "- name: ${file.name}\n"
    yaml << "  thumb: ${file.thumbnail}\n"
    yaml << "  url: ${file.url}\n\n"
}

