package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.UserInfo;

public interface UserInfoRepository extends JpaRepository<UserInfo, Integer>{

	Optional<UserInfo> findByEmailaddress(String emailaddress);

}
