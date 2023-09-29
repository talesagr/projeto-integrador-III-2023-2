package com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.service;

import com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.dto.PessoaDTO;
import com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.orm.Pessoa;
import com.example.projeto.integrador.bibliotecaHogwarts.projetoIntegradorIII.repository.PessoaRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PessoaService {
    private final PessoaRepository pessoaRepository;

    public void addPessoa(Pessoa pessoa) throws Exception{
        try{
            Pessoa pessoaORM = new Pessoa();
            pessoaORM.setNome(pessoa.getNome());
            pessoaORM.setCpf(pessoa.getCpf());
            pessoaORM.setCelular(pessoa.getCelular());
            pessoaORM.setEndereco(pessoa.getEndereco());
            pessoaORM.setIdade(pessoa.getIdade());
            pessoaORM.setUserType(pessoa.getUserType());
            pessoaRepository.save(pessoa);
        } catch (Exception e){
            throw new Exception(e.getMessage());
        }
    }
}
