module.exports = {
    openapi: "3.0.3", // present supported openapi version
    info: {
        title: "Simple  API", // short title.
        description: "A simple todos API", //  desc.
        version: "1.0.0", // version number
        contact: {
            name: "John doe", // your name
            email: "john@web.com", // your email
            url: "web.com", // your website
        },
    },
    servers: [
        {
            url: "http://localhost:3000/api", // url
            description: "Local server", // name
        },
    ],

    tags: [
        {
            name: "Product CRUD Operations", // name of a tag
        },
        {
            name: "Order CRUD Operations"
        }
    ],

    paths: {
        "/products": {
            "get": {
                "tags": ["Product CRUD Operations"],
                "summary": "Get all products in db",
                "produces": ["application/json"],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Products"
                        }
                    }
                }
            },
            "post": {
                "tags": ["Product CRUD Operations"],
                "summary": "Add product in db",
                "parameters": [
                    {
                      "name": "Products",
                      "in": "body",
                      "description": "Products we want to create",
                      "schema": {
                        "$ref": "#/definitions/Products"
                      }
                    }
                  ],
                  "produces": ["application/json"],
                  "consumes": [
                    "application/json",
                    
                    ],
                
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Products"
                        }
                    }
                }
            }
        },
        "/orders": {
            "get": {
                "tags": ["Order CRUD Operations"],
                "summary": "Get all orders in db",
                "produces": ["application/json"],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Orders"
                        }
                    }
                }
            },
            "post": {
                "tags": ["Order CRUD Operations"],
                "summary": "Add order in db",
                "parameters": [
                    {
                      "name": "Orders",
                      "in": "body",
                      "description": "Create new Order",
                      "schema": {
                        "$ref": "#/definitions/Orders"
                      }
                    }
                  ],
                  "produces": ["application/json"],
                  "consumes": [
                    "application/json",                    
                    ],
                
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/Orders"
                        }
                    }
                }
            }
        }

    },
    
    definitions: {
        "Products": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "format": "int64"
                },
                "name": {
                    "type": "integer",
                    "format": "int64"
                },
                "price": {
                    "type": "integer",
                    "format": "int32"
                },                
            },
            
        },
        "Orders": {
            "type": "object",
            "properties": {
                "id": {
                    "type": "integer",
                    "format": "int64"
                },
                "ProductId": {
                    "type": "integer",
                    "format": "int64"
                },
                "quantity": {
                    "type": "integer",
                    "format": "int32"
                },                
            },
            
        },
    }


};
