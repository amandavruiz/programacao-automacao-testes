import assert from 'assert';
import ServicoDePagamento from '../src/ServicoDePagamento.js';

describe('ServicoDePagamento', () => {

  it('deve realizar pagamento com categoria cara quando valor for maior que 100', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('0987-7656-3475', 'Samar', 132.45);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.deepStrictEqual(ultimoPagamento, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 132.45,
      categoria: 'cara'
    });
  });

  it('deve realizar pagamento com categoria padrão quando valor for menor ou igual a 100', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('1111-2222-3333', 'Energia', 99.99);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.categoria, 'padrão');
  });

  it('deve retornar o último pagamento realizado', () => {
    const servico = new ServicoDePagamento();

    servico.pagar('111', 'Empresa A', 50);
    servico.pagar('222', 'Empresa B', 200);

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento.codigoBarras, '222');
    assert.strictEqual(ultimoPagamento.empresa, 'Empresa B');
  });

  it('deve retornar null quando não houver pagamentos', () => {
    const servico = new ServicoDePagamento();

    const ultimoPagamento = servico.consultarUltimoPagamento();

    assert.strictEqual(ultimoPagamento, null);
  });

});