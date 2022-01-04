package com.jayang.phoenix.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {	
	
	@GetMapping("./test")
	public String TestContent(){
		return "test";
	}
}
