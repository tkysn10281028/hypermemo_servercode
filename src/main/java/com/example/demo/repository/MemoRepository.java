package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Memo;

@Repository
public interface MemoRepository extends JpaRepository<Memo, Integer> {

	public List<Memo> findBycreateUserEmailAddress(String createUserEmailAddress);
	
	public List<Memo> findAll();
}
