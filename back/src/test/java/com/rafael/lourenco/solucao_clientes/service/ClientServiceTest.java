package com.rafael.lourenco.solucao_clientes.service;

import com.rafael.lourenco.solucao_clientes.model.Client;
import com.rafael.lourenco.solucao_clientes.repository.ClientRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.then;

@ExtendWith(MockitoExtension.class)
class ClientServiceTest {

    @InjectMocks
    private ClientService service;

    @Mock
    private ClientRepository clientRepository;

    @Captor
    private ArgumentCaptor<Client> clientCaptor;

    @Mock
    Client client;

    @Test
    void getClients() {
        service.getClients();
        then(clientRepository).should().findAll();
    }

    @Test
    void createClients() {
        service.createClients(client);

        then(clientRepository).should().save(clientCaptor.capture());
        Client clientRes = clientCaptor.getValue();

        Assertions.assertEquals(client, clientRes);
    }
}