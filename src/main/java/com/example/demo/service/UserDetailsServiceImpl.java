package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserInfo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	UserInfoService userInfoService;

	@Autowired
	HttpServletResponse response;

	@Autowired
	PasswordEncoder encoder;

	@Override
	public UserDetails loadUserByUsername(String emailaddress) throws UsernameNotFoundException {

		log.info("emailaddress is :" + emailaddress);
		log.info("encoded emailaddress" + encoder.encode(emailaddress));

		UserInfo loginuser = userInfoService.findByEmailaddress(emailaddress);

		if (loginuser == null) {
			throw new BadCredentialsException("User Not Found By" + "[" + emailaddress + "]");
		} else {

			GrantedAuthority authority = new SimpleGrantedAuthority(loginuser.getRole());
			List<GrantedAuthority> authorities = new ArrayList<GrantedAuthority>();
			authorities.add(authority);

			UserDetails userDetails = (UserDetails) new User(loginuser.getEmailaddress(), loginuser.getPassword(),
					authorities);

			return userDetails;
		}
	}

}