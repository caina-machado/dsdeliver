package com.caina.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.caina.dsdeliver.dtos.OrderDto;
import com.caina.dsdeliver.entities.Order;
import com.caina.dsdeliver.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDto> findAll() {
		List<Order> list = orderRepository.findPendingOrdersWithProductsByMoment();
		return list.stream().map(x -> new OrderDto(x)).collect(Collectors.toList());
	}
}
