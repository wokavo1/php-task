{
    "swagger": "2.0",
    "info": {
        "version": "1.0",
        "title": "Opencart",
    },
    "paths": {
        "/index.php?route=custom_api/category.get": {
            "get": {
                "summary": "Gets all categories",
                "tags": [
                    "category"
                ],
                "operationId": "get",
                "responses": {
                    "200": {
                        "description": "Successful operation"
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                }
            }
        },
        "/index.php?route=custom_api/product.getByCategoryID": {
            "get": {
                "summary": "Gets all products by Category ID",
                "tags": [
                    "product"
                ],
                "operationId": "getByCategoryID",
                "parameters": [
                    {
                        "name": "category_id",
                        "in": "query",
                        "description": "Category ID",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful operation"
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                }
            }
        },
        "/index.php?route=custom_api/order.getByCustomerID": {
            "get": {
                "summary": "Gets all orders by Customer ID (try 1 or 2)",
                "tags": [
                    "order"
                ],
                "operationId": "getByCustomerID",
                "parameters": [
                    {
                        "name": "customer_id",
                        "in": "query",
                        "description": "Customer ID",
                        "required": true,
                        "type": "integer",
                        "format": "int64"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Successful operation"
                    },
                    "400": {
                        "description": "Invalid status value"
                    }
                }
            }
        }
    }
}