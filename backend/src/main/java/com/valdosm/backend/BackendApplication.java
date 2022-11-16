package com.valdosm.backend;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.valdosm.backend.entity.Product;
import com.valdosm.backend.repository.ProductRepository;

@SpringBootApplication
public class BackendApplication  implements CommandLineRunner{
	@Autowired
	private ProductRepository productRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Product product = new Product(null, "Caneta", 12.00);
		Product product2 = new Product(null, "Caderno", 100.00);
		Product product3 = new Product(null, "Cochila", 150.00);

		productRepository.saveAll(Arrays.asList(product, product2, product3));
		
	}

}
