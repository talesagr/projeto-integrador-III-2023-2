package com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.orm;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Table(name = "autor")
@Entity
@Getter
@Setter
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer autorid;

    private Integer autorlivrosoid;
    @OneToOne
    private Pessoa pessoa;

    private String name;
    //todo na tabela existem mais coisas


}
