<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

# Webcomponent Boilerplate

The webcomponent Boilerplate is the start to your project, and it contains a hello-world webcomp to show you how a basic one works and to give you a little help to start your amazing new webcomponent!
This guide will aid you in the process of creating a valid web-component that has all the requisites necessary to be uploaded on the Open Data Hub Store.<br>
To encourage you and support you in the process of contributing to the store we created a playlist of videos that explain each step, from start to finish.We will talk about starting from the boilerplate, what the files inside it do, how you have to use webpack and docker for your development process, and finally how to publish it on the ODH Web component store. <br>
[The complete guide in one video](https://vimeo.com/735835086)


**Table of Contents**
- [Webcomponent Boilerplate](#webcomponent-boilerplate)
- [Create](#create)
  - [Prerequisites](#prerequisites)
  - [Start from the web-component boilerplate](#start-from-the-web-component-boilerplate)
  - [Modify the file wcs-manifest.json](#modify-the-file-wcs-manifestjson)
  - [Create in SRC folder](#create-in-src-folder)
- [Test the webcomponent](#test-the-webcomponent)
  - [Installing Webpack](#installing-webpack)
    - [Basic Setup](#basic-setup)
    - [Creating a bundle](#creating-a-bundle)
    - [Modify the Package.json](#modify-the-packagejson)
  - [Installing Docker](#installing-docker)
    - [The docker containers](#the-docker-containers)
      - [START:](#start)
      - [Publish a new version of your webcomponent](#publish-a-new-version-of-your-webcomponent)
      - [Stop the docker containers](#stop-the-docker-containers)
      - [Delete your webcomponents from the store](#delete-your-webcomponents-from-the-store)
- [Test if your webcomp will run in the webcomp store](#test-if-your-webcomp-will-run-in-the-webcomp-store)
  - [Test in a local docker instance of the webcomponent store](#test-in-a-local-docker-instance-of-the-webcomponent-store)
- [Last Steps](#last-steps)
- [Final requirements for submission](#final-requirements-for-submission)
  - [Submission](#submission)
    - [Support](#support)

# Create
[Video guide: Introduction](https://vimeo.com/734001032)
## Prerequisites
To build the project, the following must have been installed in your local machine:
- Node 12/ NPM 6
- Docker

## Start from the web-component boilerplate
[Video guide: Start from the boilerplate](https://vimeo.com/734001070)
You'll have to start from the boilerplate made available by the NOI Techpark on GitHub [here](https://github.com/noi-techpark/webcomp-boilerplate).
Before beginning check out how to contribute to NOI [here](https://github.com/noi-techpark/odh-docs/wiki/Contributor-Guidelines:-Getting-started).
- Fork the repository
- Then ask the customer care ([help@opendatahub.com](mailto:help@opendatahub.com)) for a repository for your project, that will be the repository to which you'll make the pull request to.

In the boilerplate it's integrated an hello world webcomponent ready to use. If you have the prerequisites installed to run the hello world you'll have to just use these three commands in the powershell terminal:
- `npm install`
- `npm run build`
- `cp .env.example .env`
- `docker-compose up`

In `localhost:8998` you'll see the hello world component and for testing live reload is available, so you can see the effect of your changes immediately.
In `localhost:8999` you'll see the hello world component in the ODH webcomponent store, this is important for publishing, as it is vital your webcomponent works on the store.

## Modify the file wcs-manifest.json
[Video guide: What is the manifest.json?](https://vimeo.com/734001138)<br>
To register with the web components hub a wcs-manifest.json file must be in your repository's root directory. <br>
Please look attentively at what you should customize for your project<br>
- Adjust the general parts like title, description, your license,the authors section,image,searchTags,the name of the js file generated from webpack(more info about it later),the configuration section

A manifest file should look like this:

```diff
    {
+   "title": "Title of your webcomponent",
+   "shortName": "A unique short name with no spaces, like 'your-webcomponent'",
+   "description": "Description of your webcomponent",
+   "descriptionAbstract": "Small description of your webcomponent",
    "license": "AGPL-3.0-or-later",
    "copyrightHolders": [
        {
        "name": "NOI",
        "email": "info@noi.bz.it",
        "organization": "NOI S.p.A",
        "organizationUrl": "https://noi.bz.it"
        }
    ],
+   "authors": [
        {
        "name": "your-name-or-company",
        "email": "...",
        "organization": "...",
        "organizationUrl": "..."
        }
    ],

    //these files will be used by the docker

+   "image": "wcs-logo.png",
    //A screenshot of the webcomponent that will be used as a thumbnail in the webcomponent store front-page. The filename should be “wcs-logo.png” and it should be placed in the image tag of the wcs-manifest.json like “image”: “wcs-logo.png”

    "searchTags": [],
    "dist": {
        "basePath": "dist", // folder where the bundle js generated from webpack will be
        "files": [
+          "app.min.js" //file js generated from the webpack NOTE: Change the file name to yours
        ],
        "scripts": [ //this section is optional
        {
            "file": "odh-this-repos-name-without-webcomp.min.js",
            "parameter": ""
        }
        ]
    },
    "configuration": {
+    "tagName": "name of your webcomp tag",
        "options": []
    }
    }
```

- The **configuration** section of the manifest is needed for the configurator to know what options to include.
Here are some examples of what a configuration may include:

    <details>
    <summary>Example of the configuration section</summary>

    ```
    "configuration": {
        "tagName": "map-widget",
        "options": [
        {
            "key": "singleSelect",
            "type": "select",
            "label": "a single select",
            "options": {
            "values": ["optionA", "optionB"],
            "default": "optionA"
            }
        },
        {
            "key": "multiselectField",
            "type": "multiselect",
            "required": true,
            "options": {
            "label": "a multiselect field",
            "values": ["optionA","optionB","optionC"],
            "default": []
            }
        },
        {
            "key": "sample-A",
            "type": "text",
            "required": false,
            "options": {
            "default": "Test String"
            }
        },
        {
            "key": "sample-B",
            "type": "textarea",
            "required": false,
            "options": {
            "default": "A multi-\nLine Text"
            }
        },
        {
            "key": "sample-C",
            "type": "number",
            "required": false,
            "options": {
            "default": "342",
            "min": 0,
            "max": 600,
            "step": 1
            }
        },
        {
            "key": "sample-D",
            "type": "number",
            "required": false,
            "options": {
            "default": "34.2",
            "min": 0,
            "max": 60.04,
            "step": 0.01
            }
        },
        {
            "key": "booleanField",
            "type": "bool",
            "required": false,
            "options": {
            "label": "a boolean field",
            "default": false"
            }
        },
        {
            "key": "sample-F",
            "type": "object",
            "required": false,
            "options": {
            "default": {}
            }
        }
        ]
    }
    ```
    </details>

Test the wcs-manifest.json with the online test tool [Validator](https://webcomponents.opendatahub.com/validator/)

## Create in SRC folder
[Video guide: Hello World](https://vimeo.com/734000899)<br>
In the SRC folder you should create all the js files necessary for your webcomponent.
Our is a simple Hello World made using vanilla JS and HTMLElement, that you can find in this boilerplate.


 <details>
    <summary>Example of a simple js file with HTMLElement</summary>

```diff
    class HelloWorld extends HTMLElement {
        constructor() {
            super();

            // We need an encapsulation of our component to not
            // interfer with the host, nor be vulnerable to outside
            // changes --> Solution = SHADOW DOM
            this.shadow = this.attachShadow(
                {mode: "open"}    // Set mode to "open", to have access to
                                // the shadow dom from inside this component
            );
        }

        // Attributes we care about getting values from
        // Static, because all HelloWorld instances have the same
        //   observed attribute names
        static get observedAttributes() {
            return ['title'];
        }

        // Override from HTMLElement
        // Do not use setters here, because you might end up with an endless loop
        attributeChangedCallback(propName, oldValue, newValue) {
            console.log(`Changing "${propName}" from "${oldValue}" to "${newValue}"`);
            if (propName === "title") {
                this.render();
            }
        }

        // We should better use such getters and setters and not
        // internal variables for that to avoid the risk of an
        // endless loop and to have attributes in the html tag and
        // Javascript properties always in-sync.
        get title() {
            return this.getAttribute("title");
        }

        set title(newTitle) {
            this.setAttribute("title", newTitle)
        }

        // Triggers when the element is added to the document *and*
        // becomes part of the page itself (not just a child of a detached DOM)
        connectedCallback() {
            this.render();
        }

        render() {
            this.shadow.innerHTML = `
                <style>
                    h1 {
                        color: black;
                    }
                </style>
                <h1>
                    ${this.title}
                </h1>
            `;
        }
    }

    // Register our first Custom Element named <hello-world>
    customElements.define('hello-world', HelloWorld);

```
</details>
<br>

# Test the webcomponent
To test the webcomponent you use Webpack and Docker. If you started with the deployment of the Hello world many of the commands for the setups won't be necessary.

## Installing Webpack
[Video guide: What is Webpack?](https://vimeo.com/734001174) <br>
Webpack is used to compile JavaScript modules. [Here](https://webpack.js.org/guides/getting-started/) you can find more information.<br>
It is necessary to use it because in the manifest json you should use just one JS file with also assets like css, images and fonts bundled into it.<br>
After deploying the boilerplate the webcomponent files in the SRC will be bundled inside a dist folder

### Basic Setup
 - initialize npm<br>
 `npm init -y`<br>
 - install [Webpack Locally](https://webpack.js.org/guides/installation/#local-installation)<br>
 - install the webpack-cli (the tool used to run webpack on the command line)<br>
 `npm install webpack webpack-cli --save-dev`<br>
 <br>
 
### Creating a bundle
To test the webcomponent on docker you'll have first to bundle all your files and assets (ex: CSS, Images, Fonts) in a single JS file. <br>
You can also see <b>[here](https://webpack.js.org/guides/asset-management) </b>the guide provided by Webapack on how to bundle assets.<br>
This file will be generated from webpack in the dist folder and it is the one you'll have to recall in the wcs-manifest.json.<br>
<br>
There are two webpack files the production and developer<br>
<br>
- webpack.prod.js <br>
In the production the entry is your javascript file you want to bundle and the output is the bundled file. You can change the name to your liking but remember to change it also in the manifest json file.<br> This file will be easy accessible with a npm script  `npm run build`.

```diff
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', //your js file that will be bundles
  output: {
    filename: 'webcomp-boilerplate.min.js', // the bundled file - the file name you should also put in the manifest.json
    path: path.resolve(__dirname, 'dist'),
  },
};
 ```
- webpack.dev.js <br>
In the developer the entry is the same but the the bundle will be stored in the memory with the Dev server.Usuful for testing as it enables live reload and you can see the changes in real time<br>
This file will be easy accessible with a npm script `npm run start`.

```diff
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //your js file that will be bundles
  output: {
    filename: 'webcomp-boilerplate.js', //this will be only saved in the memory, usufull for testing
    clean: true
  },
  devServer: {            //the server were the file will be processed
    static: './public',
    port: 8998,
    hot: true
  },
  devtool: 'inline-source-map',
};
 ```

### Modify the Package.json
In the Package.json it is important to have installed Webpack inside the Dependencies - but that was already done when you followeed the instruction to deploy the boilerplate, or you can consult the basic setup above.<br>
Given it's not particularly fun to run a local copy of webpack from the CLI, we can set up a little shortcut we made two scripts commands.<br>

- The `npm run build` will bundle the file and then compress it to a non human readable form and the output will be the file inside the dist folder.

- The `npm run start` will also do a bundling but only in the memory with the server and it doesn’t outup a new file, this is usuful for testing

You can adjust the scripts “npm run start”, “npm run build”, “npm run lint” and “npm run test” to your liking.

## Installing Docker
[Video guide: What is Docker?](https://vimeo.com/734001110) <br>
Now that you have the single js file created by the webpack you can use docker to run the file and see the resulting webcomp on docker. But first you'll have to install it.<br>
Install [Docker](https://docs.docker.com/install/) (with Docker Compose) locally on your machine.

### The docker containers
In the file `docker-compose.yml` you can see all the containers that will open on docker:<br>
The first one called: `app` is the one that will show your webcomponent, all the other below are the necessary container for the open data hub Webcomponent store.
These containers are there for the last step of testing if your new webcomp will be visible in the store.<br>
#### START:
- Create a .env file: <br>
  `cp .env.example .env`
- [Optional] Adjust port numbers in .env if they have conflicts with services already running on your machine
- Start the store with: <br>
  `docker-compose up -d`
- Update the docker using the scripts commands of the webpack<br>
ex :  `npm run build`
    > This command in our example will re-bundle your files and update the view on docker
- Wait until the containers are running. You can check the current state with: <br>
  `docker-compose logs --tail 500 -f`
- Access webcomponent running in separated docker in your browser on: <br>
  `localhost:8998`
- Access the store in your browser on: <br>
  `localhost:8999`

Note: If you only want to start the webcomponent in the separated docker container without the webcomponent store, simply run `docker-compose up app -d`

### Publish a new version of your webcomponent
- Increase version number WC_VERSION in your .env file
- Then run: `docker-compose up wcstore-cli`

#### Stop the docker containers
- `docker-compose stop`

#### Delete the docker containers from your machine
- `docker-compose down`

#### Delete your webcomponents from the store
- `[sudo] rm -f workspace`
- `docker-compose down`

# Test if your webcomp will run in the webcomp store
The last step is to test if your web component will run on the Open Data Hub webcomponent store. This is a very important step, because we will not accept web components that won't work on our store.<br>
For the docker commands please consult the paragraph above.

## Test in a local docker instance of the webcomponent store
If you want to test the webcomponent on a local instance of the [webcomponent store](https://webcomponents.opendatahub.com/) to make sure that it will run correctly also on the real store.
You can also access the webcomponent running in a simple separated docker container outside of the store.

For accessing the webcomponent in a separated docker in the browser you will need a server (e.g. webpack dev-server) that is hosting a page which includes the webcomponent tag, as well as the script defining it. This page needs to be hosted on port 8080 as specified in your docker-compose file.

# Last Steps
[Video guide: How to publish your webcomponent](https://vimeo.com/734001003) <br>
- Delete the containers of the ODH store in the `docker-compose.yml` file (every container except `app`- the first one)
- Modify the `README.example.md` to create the README file of your webcomp and then delete the one of the Boilerplate.

# Final requirements for submission
- One single js file
- Assets like css or images need to be lazy loaded or bundled into the single js file with https://webpack.js.org/
- A screenshot of the webcomponent that will be used as a thumbnail in the webcomponent store front-page. The filename should be “wcs-logo.png” and it should be placed in the image tag of the wcs-manifest.json like “image”: “wcs-logo.png”
-The webcomponent should be visible and work in the ODH Webcomponent store (docker test)

## Submission
- Create a pull request against the repository you asked at the beggining of your project to the [help@opendatahub.com](mailto:help@opendatahub.com)
- Finally, to publish check out this how to guide [here](https://github.com/noi-techpark/odh-docs/wiki/How-to-publish-your-web-component-on-the-Open-Data-Hub-Store)

### License
image: "wcs-logo.png" is under the CCO License (public domain)

### Support
For support, please contact [help@opendatahub.com](mailto:help@opendatahub.com).

### REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:
```bash
pip install pre-commit
```
Then install the pre-commit hook via the config file by running:
```bash
pre-commit install
```

