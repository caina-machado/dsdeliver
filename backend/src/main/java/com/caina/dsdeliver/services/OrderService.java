package com.caina.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.caina.dsdeliver.dtos.OrderDto;
import com.caina.dsdeliver.dtos.ProductDto;
import com.caina.dsdeliver.entities.Order;
import com.caina.dsdeliver.entities.Product;
import com.caina.dsdeliver.entities.enums.OrderStatus;
import com.caina.dsdeliver.repositories.OrderRepository;
import com.caina.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDto> findAll() {
		List<Order> list = orderRepository.findPendingOrdersWithProductsByMoment();
		return list.stream().map(x -> new OrderDto(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDto insert(OrderDto dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for(ProductDto p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			
			order.getProducts().add(product);
		}
		
		order = orderRepository.save(order);
		return new OrderDto(order);
	}
}
