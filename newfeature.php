<?php
// Newfeature extension, https://github.com/datenstrom/yellow-newfeature

class YellowNewfeature {
    const VERSION = "0.9.1";
    public $yellow;         // access to API
    
    // Handle initialisation
    public function onLoad($yellow) {
        $this->yellow = $yellow;
    }
    
    // Handle page content element
    public function onParseContentElement($page, $name, $text, $attributes, $type) {
        $output = null;
        if ($name=="newfeature" && ($type=="block" || $type=="inline")) {
            $message = "Hello World";
            if (substru($text, 0, 2)=="- ") $message = trim(substru($text, 2));
            $output = "<div class=\"newfeature\" aria-label=\"".htmlspecialchars($message)."\" data-message=\"".htmlspecialchars($message)."\" data-speed=\"100\">&nbsp;</div>";
        }
        return $output;
    }
    
    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name=="header") {
            $assetLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreAssetLocation");
            $output = "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"{$assetLocation}newfeature.css\" />\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$assetLocation}newfeature.js\"></script>\n";
        }
        return $output;
    }
}
