package com.rafael.lourenco.solucao_clientes.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotBlank
    @Size(min = 5)
    private String companyName;

    @NotBlank
    @Size(min = 5)
    private String tradeName;

    @NotBlank
    @Pattern(regexp = "\\d{11}|\\d{14}")
    private String TaxID;

    @NotBlank
    @Pattern(regexp = "\\d{10,11}")
    private String contact;

    @NotNull
    @Min(0)
    @Max(1)
    private Integer status;
}
