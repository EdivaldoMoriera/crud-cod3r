package com.valdosm.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.valdosm.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {
    
}
