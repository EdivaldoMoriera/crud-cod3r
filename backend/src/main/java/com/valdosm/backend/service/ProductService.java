package com.valdosm.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.valdosm.backend.entity.Product;
import com.valdosm.backend.repository.ProductRepository;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> findAll() {
        return productRepository.findAll();

    }

    public Product findById(Integer id) {
        Optional<Product> obj = productRepository.findById(id);
        return obj.get();
    }

    // Inserir novo usuario
    public Product insert(Product obj) {
        return productRepository.save(obj);
    }

    // atualizar
    public Product update(Integer id, Product obj) {
        Product entity = productRepository.getReferenceById(id);
        updateDate(obj, entity);
        return productRepository.save(entity);

    }

    private void updateDate(Product obj, Product entity) {
        entity.setName(obj.getName());
        entity.setPrice(obj.getPrice());
    }
    //delete usuario
    public void delete(Integer id){
        productRepository.deleteById(id);

    }

}