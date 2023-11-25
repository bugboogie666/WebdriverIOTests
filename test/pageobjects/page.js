import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    #tymbeDomain = "tymbe.com"

    open (path, prefix) {
        if(path === "" && prefix === ""){
            return browser.url(`https://${this.#tymbeDomain}/`)
        }        
        else if (path === "" && prefix !== "") {
            return browser.url(`https://${prefix}.${this.#tymbeDomain}/`)            
        }
        else if(path !== "" && prefix === ""){
            return browser.url(`https://${this.#tymbeDomain}/${path}`)
        }
        else{
            return browser.url(`https://${prefix}.${this.#tymbeDomain}/${path}`)
        }    
    }
}
