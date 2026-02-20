package com.product.product_service.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/product")
public class ProductController {

 @PostMapping
public String postProduct() {
  System.out.println("Product posted");
 return "Product posted";
 }

}
