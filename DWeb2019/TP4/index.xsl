<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    
    
    <xsl:template match="/">
        <xsl:result-document href="dataset/index.html">
            <html>
                <head>
                    <title>Arqueossítios</title>
                    <meta charset="UFT-8"/>
                </head>
                <body>
                    <h1>Arqueossítios do NW Portugues</h1>
                    <h3>Indice(por concelho)</h3>
                    <ul>
                        <xsl:apply-templates select="//ARQELEM[not(preceding::CONCEL=./CONCEL)]" mode="indice">
                            <xsl:sort select="normalize-space(CONCEL)"></xsl:sort>
                        </xsl:apply-templates>
                        
                    </ul>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="indice">
        <xsl:variable name="c" select="CONCEL"/>
        <li>
            <xsl:value-of select="CONCEL"/>
            <ol>
                <xsl:apply-templates select="//IDENTI[../CONCEL=$c]">
                    <xsl:sort select="."/>
                </xsl:apply-templates>
            </ol>    
        </li>
    </xsl:template>
    
    
    <xsl:template match="IDENTI">
        <li>
            <a name="{../count(preceding-sibling::*)+1}"/>
            <a href="{../count(preceding-sibling::*)+1}"><xsl:value-of select="."/></a>
        </li>
    </xsl:template>
    <xsl:template match="text()" priority="-1"></xsl:template>
    
    

    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="dataset/arq{count(preceding-sibling::*)+1}.xml">
            <xsl:processing-instruction name="xml-stylesheet" >type="text/xsl" href="arq2html.xsl"</xsl:processing-instruction>
            <xsl:copy-of select="."/>
        </xsl:result-document>
    </xsl:template>
    
    
</xsl:stylesheet>