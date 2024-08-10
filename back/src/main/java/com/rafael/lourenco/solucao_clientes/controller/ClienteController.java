package com.rafael.lourenco.solucao_clientes.controller;

import com.rafael.lourenco.solucao_clientes.model.Client;
import com.rafael.lourenco.solucao_clientes.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClienteController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public List<Client> getClients(){
        return clientService.getClients();
    }

    @PostMapping
    public void createClients(@RequestBody Client client){
        clientService.createClients(client);
    }
}
