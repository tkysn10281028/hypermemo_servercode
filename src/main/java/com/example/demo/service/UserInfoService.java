package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserInfo;
import com.example.demo.repository.UserInfoRepository;

@Service
public class UserInfoService {

	@Autowired
	UserInfoRepository userInfoRepository;

	public UserInfo findByEmailaddress(String emailaddress) {

		Optional<UserInfo> optuserinfo = userInfoRepository.findByEmailaddress(emailaddress);
		if (optuserinfo.isPresent()) {
			return optuserinfo.get();
		} else {
			return null;
		}

	}
}
