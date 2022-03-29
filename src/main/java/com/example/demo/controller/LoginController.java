package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserInfo;
import com.example.demo.service.UserInfoService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api/v1")
public class LoginController {
	@Autowired
	UserInfoService userInfoService;
	
	/**
	 * @param Authentication auth
	 * @return ResponseEntityでログインしたユーザー情報を返す
	 */
	@GetMapping("/login")
	public ResponseEntity<UserInfo> loginSuccess(Authentication auth) {
		HttpHeaders headers = new HttpHeaders();
		log.info("login emailaddress : " + auth.getName());
		UserInfo userInfo = userInfoService.findByEmailaddress(auth.getName());

		return new ResponseEntity<UserInfo>(userInfo, headers, HttpStatus.OK);
	}

}
