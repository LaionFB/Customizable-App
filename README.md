# CustomizableApp

An angular app that can be customized according to the customer's needs.

There is a default company, and other three companies that extends default company's features.

It basicaly creates a NgModule for each company and overrides the components that should be modified.

##Default

Has three pages: Home, Person and Terms and conditions, and a custom input component.

##Customer 1

Extends Person page including another field and also includes a field on Terms and conditions page.

##Customer 2

Removes Terms and conditions page, includes a Privacy policies page and modifies the input component's template.

##Customer 3

Is exactly the same as default page.