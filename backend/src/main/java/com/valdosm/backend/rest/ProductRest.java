package com.valdosm.backend.rest;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.valdosm.backend.entity.Product;
import com.valdosm.backend.service.ProductService;

@RestController
@RequestMapping(value = "api/products")
public class ProductRest {
  @Autowired
  private ProductService productService;

  @GetMapping
  public ResponseEntity<List<Product>> finAll() {
    List<Product> list = productService.findAll();
    return ResponseEntity.ok().body(list);
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<Product> findById(@PathVariable Integer id) {
    Product product = productService.findById(id);
    return ResponseEntity.ok().body(product);

  }

  @PostMapping
  public ResponseEntity<Product> insert(@RequestBody Product product) {
    product = productService.insert(product);
    URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri()
        .path("/{id}").buildAndExpand(product.getId()).toUri();
    return ResponseEntity.created(uri).body(product);
  }

  @PutMapping(value = "/{id}")
  public ResponseEntity<Product> update(@PathVariable Integer id, @RequestBody Product product) {
    product = productService.update(id, product);
    return ResponseEntity.ok().body(product);
 
  }

  @DeleteMapping(value = "/{id}")
  public ResponseEntity<Void> delete(@PathVariable Integer id) {
    productService.delete(id);
    return ResponseEntity.noContent().build();
  }
}
