package com.axis.jobOpporunites.Dao.impl;

import com.axis.jobOpporunites.Dao.UserDao;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;



@Repository
@Transactional
@Service
public class UserDaoImpl implements UserDao {
	@PersistenceContext
	private EntityManager entityManager;
}
