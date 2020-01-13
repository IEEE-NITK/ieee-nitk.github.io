---
layout : post
title : "Web Vulnerabilities"
author_github : vineeth14
date: 2020-01-14 23:32:44
image: '/assets/img/'
description: 'Web Vulnerabilities'
tags:
- IEEE NITK
- CompSoc
- web
- vulnerabilities
categories:
- CompSoc
github_username: 'vineeth14'
---

# Web Vulnerabilities

A vulnerability is a hole or a weakness in the application, which can be a design flaw or an implementation bug, that allows an attacker to cause harm to the stakeholders of an application.
Websites across the world are programmed with different programming languages.
Although each specific language have specific vulnerabilities ,issues exist fundamental to the internet that can show up disregarding the choosen language or framework used.

  Some Web Vulnerabilities

-   SQL Injection
    
-   Cross Site Request Forgery
    
-   Cross Site Scripting
    
-   Server Side Request Forgery
    

  
  

## SQL INJECTION

SQL Injection is a vulnerability where an application takes input from a user and doesn't vaildate that the user's input doesn't contain additional SQL. To make an SQL Injection attack, an attacker must first find vulnerable user inputs within the web page or web application. A web page or web application that has an SQL Injection vulnerability uses such user input directly in an SQL query.

SQL is a query language that was designed to manage data stored in relational databases. You can use it to access, modify, and delete data. Many web applications and websites store all the data in SQL databases. In some cases, you can also use SQL commands to run operating system commands. Therefore, a successful SQL Injection attack can have very serious consequences.

A simple Example:

 <?php
$username = $_GET['username']; // kchung
 $result = mysql_query("SELECT * FROM users WHERE username='$username'");
?>

what if we input ‘OR 1=1?

Here as 1=1,this equates to true to sql .This will then return every row in the table becuase each row that exists must be true.

Using this technique of adding SQL statements to an existing query we can force databases to return data that it was not meant to return.

  
  ## CROSS SITE REQUEST FORGERY

CSRF is an attack that tricks the victim into submitting a malicious request. It inherits the identity and privileges of the victim to perform an undesired function on the victim's behalf. For most sites, browser requests automatically include any credentials associated with the site, such as the user's session cookie, IP address, Windows domain credentials, and so forth. Therefore, if the user is currently authenticated to the site, the site will have no way to distinguish between the forged request sent by the victim and a legitimate request sent by the victim.

  
  ## CROSS SITE SCRIPTING

Cross Site Scripting or XSS is a vulnerability where on user of an application can send JavaScript that is executed by the browser of another user of the same application.This is a vulnerability because JavaScript has a high degree of control over a user's web browser.That is Javascript has the ability to send more HTTP requests,modify the page,access the cookies.

XSS is typically broken down into three categories:

-   Reflected XSS
    
-   Stored XSS
    

 **REFLECTED XSS**

Reflected XSS is done through URL manipulation.One of the deficiencies of reflected XSS however is that it requires the victim to access the vulnerable page from an attacker controlled resource. Notice that if the data paramter, wasn't provided the exploit wouldn't work.

**STORED XSS**

  Stored cross-site scripting arises when an application receives data from an untrusted source and includes that data within its later HTTP responses in an unsafe way.If an attacker can control a script that is executed in the victim's browser, then they can typically fully compromise that user.Difference between reflected and stored XSS is that a stored XSS vulnerability enables attacks that are self-contained within the application itself.The self-contained nature of stored cross-site scripting exploits is particularly relevant in situations where an XSS vulnerability only affects users who are currently logged in to the application.The web site itself is serving up the XSS payload to other users. This makes it very difficult to detect from the browser's perspective and no browser is capable of generically preventing stored XSS from exploiting a user.

  
  

## SERVER SIDE REQUEST FORGERY

Server Side Request Forgery is when an attacker is able to cause a web application to send a request that the attacker determines.The attacker can abuse functionality on the server to read or update internal resources. The attacker can supply or a modify a URL which the code running on the server will read or submit data to, and by carefully selecting the URLs.