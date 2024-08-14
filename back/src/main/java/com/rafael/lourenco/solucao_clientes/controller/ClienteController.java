package com.rafael.lourenco.solucao_clientes.controller;

import com.rafael.lourenco.solucao_clientes.dto.DefaultContentDTO;
import com.rafael.lourenco.solucao_clientes.model.Client;
import com.rafael.lourenco.solucao_clientes.service.ClientService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClienteController {

    @Autowired
    private ClientService clientService;

    @GetMapping
    public ResponseEntity<?> getClients(){
        try {
            return ResponseEntity.ok(clientService.getClients());
        } catch (Exception e) {
            System.out.println(e);

            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("An error occurred while getting clients.");
        }
    }

    @PostMapping
    @Transactional
    public ResponseEntity<DefaultContentDTO> createClients(@RequestBody @Valid Client client){
        try{
            clientService.createClients(client);
            return ResponseEntity.ok(new DefaultContentDTO("Created"));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new DefaultContentDTO("An error occurred while persisting clients."));
        }
    }
}
