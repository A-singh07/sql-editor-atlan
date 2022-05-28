# SQL Editor Panel
#### using React.js and Material UI

#### [WebApp Hosted Link](https://sql-editor-panel.vercel.app/)


## Overview
SQL editor built using React.js and Material UI, capable of performing basic SQL operations and handling large set of data without crashing the browser. Several features have been offered in the application list of which is mentioned below.

![main-page-ss](https://github.com/A-singh07/sql-editor-atlan/blob/main/src/assets/sql-editor-screenshot.png?raw=true)

## Features
- Can use sidebar menu to get the data in output table just with a click.
- Can use code editor to type-in the commands and get results in output table.
- Features like autocomplete and code snippets are also provided with the editor.
- Can export data from the output table in CSV format or can print as well.
- Can filter, search and sort directly from the toolbars above the table or from the Column headers itself.
- Can perform pagination for large set of data

Basic SQL commands like the one mentioned below works efficiently:
> select * from customers where customerID="ALFKI"

##### Pre-defined Commands:
- select * from categories
- select * from customers
- select * from products
- select * from regions
- select * from shippers
- select * from suppliers
- select * from territories

## Packages Used
- [Material UI](https://mui.com/) : UI components and data grid table
- [AlaSQL](http://alasql.org/) : Handles sql queries and to read csv files
- [React-Ace](https://www.npmjs.com/package/react-ace) : Emeddable code editor

## Application Performance
[Google PageSpeed](https://pagespeed.web.dev/) has been used to measure the performance of the application.
Page Load time of the application is found to be between 0.7s to 0.9s.

![pageSpeed-score](https://github.com/A-singh07/sql-editor-atlan/blob/main/src/assets/pageSpeed%20-%20Performance%20score.png?raw=true)

##### Steps taken to optimize the application:
- Google Fonts was found to be the render blocking element. To avoid this, it has been asynchronously loaded, using rel="stylesheet preload prefetch" for its link tag.
- Major components like react-ace editor and MUI TableDataGrid have been lazy loaded using React.lazy(). And added a loading component as a fallback.
- Implemented suggestions from pageSpeed during the test to remove unused JS as much as possible.
