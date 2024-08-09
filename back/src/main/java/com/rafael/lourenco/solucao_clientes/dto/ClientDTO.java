package com.rafael.lourenco.solucao_clientes.dto;

import java.util.UUID;

public record ClientDTO(
    UUID id,
    String companyName,
    String tradeName,
    String TaxID,
    String contact,
    Integer status){}
