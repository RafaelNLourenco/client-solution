package com.rafael.lourenco.solucao_clientes.controller;

import com.rafael.lourenco.solucao_clientes.dto.DefaultContentDTO;
import com.rafael.lourenco.solucao_clientes.model.Client;
import com.rafael.lourenco.solucao_clientes.service.ClientService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.io.IOException;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
class ClienteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JacksonTester<Client> clientJT;

    @Autowired
    private JacksonTester<DefaultContentDTO> defaultContentDTOJT;

    @MockBean
    private ClientService clientService;

    private void mvcPostRequest(Client client, Integer status) throws Exception {
        String json;

        if (client != null){
            json = this.clientJT.write(client).getJson();
        } else {
            json = "{}";
        }

        var response = mockMvc.perform(
                post("/clients")
                        .content(json)
                        .contentType(MediaType.APPLICATION_JSON)
        ).andReturn().getResponse();

        Assertions.assertEquals(status, response.getStatus());
    }

    @Test
    void shouldReturnBadRequestNoContentPostClient() throws Exception {
        this.mvcPostRequest(null, 400);
    }

    @Test
    void shouldReturnBadRequestWrongCompanyName() throws Exception {
        Client client = new Client(null, "Goog", "Google", "71684844000147", "11999999999", 0);
        this.mvcPostRequest(client, 400);
    }


    @Test
    void shouldReturnBadRequestWrongTradeName() throws Exception {
        Client client = new Client(null, "Google", "Goog", "71684844000147", "11999999999", 0);
        this.mvcPostRequest(client, 400);
    }

    @Test
    void shouldReturnBadRequestWrongTaxID() throws Exception {
        Client client = new Client(null, "Google", "Google", "7168484400014", "11999999999", 0);
        this.mvcPostRequest(client, 400);
    }

    @Test
    void shouldReturnBadRequestWrongContact() throws Exception {
        Client client = new Client(null, "Google", "Google", "71684844000147", "119999999", 0);
        this.mvcPostRequest(client, 400);
    }
    @Test
    void shouldReturnBadRequestWrongStatus() throws Exception {
        Client client = new Client(null, "Google", "Google", "71684844000147", "11999999999", 3);
        this.mvcPostRequest(client, 400);
    }

    @Test
    void shouldCreateClientsCase1() throws Exception {
        Client client = new Client(null, "Google", "Google", "71684844000147", "1199999999", 0);
        this.mvcPostRequest(client, 200);

    }


    @Test
    void shouldCreateClientsCase2() throws Exception {
        Client client = new Client(null, "Googl", "Googl", "71684844000", "11999999999", 1);
        this.mvcPostRequest(client, 200);

    }
}