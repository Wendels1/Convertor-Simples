'use client'

import Pagina from "../components/Pagina"
import { Button, Modal, Form, Image } from 'react-bootstrap';  
import { useState } from 'react';
import { FaCheck, FaTrashAlt } from 'react-icons/fa';


export default function ConversorMoedas() {
    const [showModal, setShowModal] = useState(false);
    const [resultado, setResultado] = useState(0);
    const [moeda, setMoeda] = useState('');
    const [valor, setValor] = useState('0');
    const [moedaSelecionada, setMoedaSelecionada] = useState('Dólar');
  
    const taxas = {
      Dólar: 0.20,
      Euro: 0.18,
      Bitcoin: 0.000003,
    };
  
    function calcular() {
      const valorReal = Number(valor);
      const resultadoConversao = valorReal * taxas[moedaSelecionada];
      setResultado(resultadoConversao);
      setMoeda(moedaSelecionada);
      setShowModal(true);
    }
  
    function limpar() {
      setValor('0');
      setMoedaSelecionada('Dólar');
      setResultado(0);
    }

  return (
    <Pagina titulo="Conversor de moedas Simples">

        
         <Form>
        <Form.Group className='mb-2'>
          <Form.Label>Valor em Reais:</Form.Label>
          <Form.Control
            type='number'
            value={valor}
            min={1}
            onChange={(e) => setValor(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-2'>
          <Form.Label>Moeda:</Form.Label>
          <Form.Select
            value={moedaSelecionada}
            onChange={(e) => setMoedaSelecionada(e.target.value)}
          >
            <option value="Dólar">Dólar</option>
            <option value="Euro">Euro</option>
            <option value="Bitcoin">Bitcoin</option>
          </Form.Select>
        </Form.Group>

        <div className="text-center mb-2">
          {/* Exibir as imagens das moedas */}
          {moedaSelecionada === 'Dólar' && (
            <Image src="/Image/Dolar.jfif" alt="Dólar" width={100} />
          )}
          {moedaSelecionada === 'Euro' && (
            <Image src="/Image/Euro_symbol.svg.png" alt="Euro" width={100} />
          )}
          {moedaSelecionada === 'Bitcoin' && (
            <Image src="/Image/Bitcoin.jpg" alt="Bitcoin" width={100} />
          )}
        </div>
        
        <Form.Group className='mb-2 text-center'>
          <Button type='button' onClick={calcular} className='me-2'>
            <FaCheck /> Converter
          </Button>
          <Button type='button' onClick={limpar}>
            <FaTrashAlt /> Limpar
          </Button>
        </Form.Group>
      </Form>

      {/* Modal do resultado */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Resultado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>O resultado da conversão é {resultado} {moeda}.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

    </Pagina>
  )
}
