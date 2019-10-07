<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    <xsl:template match="/">
            <html>
                <head>
                    <title>Project Record </title>
                    <meta charset="UFT8"/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                </head>
                <body>
                    <h1 align="center">Project Record</h1>
                    <hr/>
                    <xsl:apply-templates />
                </body>
            </html>
    </xsl:template>
    
    <xsl:template match="metadata">
        <table width="100%" border="0">
            <tr>
                <td width="50%">
                    <b>KEY NAME</b> <font color="#000080"> <xsl:value-of select="keyname"/></font>
                </td>
                <td width="50%">
                    <b>BEGIN DATE:</b> <font color="#000080"> <xsl:value-of select="bdate"/></font>
               </td>
           </tr>
                  
            <tr>
                <td width="50%">
                    <b>TITLE</b> <font color="#000080"> <xsl:value-of select="title"/></font>
                </td>
                <td width="50%">
                    <b>END DATE:</b> <font color="#000080"> <xsl:value-of select="edate"/></font>
                </td>   
            </tr>
            
            <tr>
                <xsl:choose>
                    <xsl:when test="subtitle">
                <td width="50%">
                    <b>SUBTITLE</b> <font color="#000080"> <xsl:value-of select="subtitle"/></font>
                </td>
                        </xsl:when>
                </xsl:choose>
                <td width="50%">
                    <b>SUPERVISOR:</b><font color="#000080"><a href="{supervisor/@homepage}"><xsl:value-of select="supervisor"/></a> </font>
                </td>   
            </tr>
            
        </table>
        <hr/>
        <hr/>
      
        
    </xsl:template>
    
    <xsl:template match="workteam">
        <h3>Workteam</h3>
        <ol>
            <xsl:apply-templates select="worker"/>
        </ol>
        <hr/>
        <hr/>
    </xsl:template>
    
    
    <xsl:template match="worker">
            <li>
            <table>
               <tr>
                   <th>
                       <b>NUMBER:</b> <td ><xsl:value-of select="identifier"/></td>
                   </th>
               </tr>
                <tr>
                    <th>
                        <b>NAME:</b> <td> <xsl:value-of select="name"/></td>
                    </th>
                </tr>
                <tr>
                    <th>
                        <b>EMAIL</b> <td> <xsl:value-of select="email"/></td>
                    </th>
                </tr>
                <xsl:choose>
                    <xsl:when test="git">
                        <tr>
                            <th> <b>Github</b> <td> <xsl:value-of select="git"/> </td>
                            </th>
                        </tr>
                    </xsl:when>
                </xsl:choose>
            </table>
                </li>
        
        
        
    </xsl:template>
    
    <xsl:template match = "abstract">
        
        <h3>Abstract</h3>
        <xsl:apply-templates select="p"/>
        <hr/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="p">
        <p><xsl:apply-templates/></p>
    </xsl:template>
    
    <xsl:template match="b">
        <b><xsl:apply-templates/></b>
    </xsl:template>
    
    <xsl:template match="i">
        <i><xsl:apply-templates/></i>
    </xsl:template>
    
    <xsl:template match ="xref">
        <a href="{@url}"><xsl:apply-templates/> </a>
        
    </xsl:template>
    
    <xsl:template match="deliverables">
        <h3>Deliverables</h3>
        <ul><xsl:apply-templates select="deliverable"/></ul>
        <hr/>
    </xsl:template>
    
    <xsl:template match="deliverable">
       <li> <a href="{@path}"><xsl:apply-templates/> </a></li>        
    </xsl:template>
</xsl:stylesheet>