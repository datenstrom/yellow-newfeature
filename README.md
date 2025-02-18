# Example 0.9.1

Example feature for Datenstrom Yellow.

<p align="center"><img src="SCREENSHOT.png" alt="Screenshot"></p>

## How to install an extension

[Download ZIP file](https://github.com/datenstrom/yellow-example-feature/archive/refs/heads/main.zip) and copy it into your `system/extensions` folder. [Learn more about extensions](https://github.com/annaesvensson/yellow-update).

**TODO:** *Change the download link to your repository. Test your extension in a brand new installation.*

## How to make animated text

Create a `[helloworld]` shortcut. 

**TODO:** *Explain how your extension can be used. Write multiple howto sections, if necessary.*

## Examples

Making animated text:

    [helloworld]
    [helloworld - printf("Hello World\n");]
    [helloworld - alert("Hello World");]  

Making animated text inside a list:

    Datenstrom Yellow is for people who make small websites.
    
    * [helloworld - Fun to use]
    * [helloworld - Just files and folders]
    * [helloworld - Installed in a few minutes]

**TODO:** *Show how your extension can be used. Give multiple examples that can be copy/pasted.*

## Settings

The following settings can be configured in file `system/extensions/yellow-system.ini`:

`HelloworldMessage` = default text message  
`HelloworldSpeed` = cursor speed in ms  

**TODO:** *Show how your extension can be configured. Describe settings and files that can be adjusted.*

## Acknowledgements

This extension includes feedback by Anna Svensson, Giovanni Salmeri and Steffen Schultz. Thank you for the good work.

**TODO:** *Mention other people, libraries and services. Give them the recognition they deserve.*

## Developer

Steffen Schultz. [Get help](https://datenstrom.se/yellow/help/).
