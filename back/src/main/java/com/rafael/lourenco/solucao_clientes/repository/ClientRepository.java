package com.rafael.lourenco.solucao_clientes.repository;

import com.rafael.lourenco.solucao_clientes.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;


public interface ClientRepository extends JpaRepository<Client, UUID> {
}
