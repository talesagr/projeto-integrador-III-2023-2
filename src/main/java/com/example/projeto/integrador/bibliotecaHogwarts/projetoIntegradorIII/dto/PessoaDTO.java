package com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.dto;

import com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.domain.UserType;
import com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.orm.Pessoa;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Getter
@Setter
public class PessoaDTO {
    @NotEmpty
    private String nome;
    @NotEmpty
    private Integer idade;
    @NotEmpty
    private String cpf;
    @NotEmpty
    private String endereco;
    @NotEmpty
    private String celular;
    @NotEmpty
    private UserType userType;

    public Pessoa toORM() {
        return new Pessoa(nome,idade,cpf,endereco,celular,userType);
    }
}
