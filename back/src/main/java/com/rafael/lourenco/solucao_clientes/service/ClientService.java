package com.rafael.lourenco.solucao_clientes.service;

import com.rafael.lourenco.solucao_clientes.model.Client;
import com.rafael.lourenco.solucao_clientes.repository.ClientRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;

    public List<Client> getClients(){
        return clientRepository.findAll();
    }

    public void createClients(Client client){
        clientRepository.save(client);
    }
}
