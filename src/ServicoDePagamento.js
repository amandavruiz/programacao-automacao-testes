class ServicoDePagamento {
  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100 ? 'cara' : 'padrão'
    };

    this.pagamentos.push(pagamento);

    return pagamento;
  }

  consultarUltimoPagamento() {
    return this.pagamentos.length
      ? this.pagamentos[this.pagamentos.length - 1]
      : null;
  }
}

export default ServicoDePagamento;