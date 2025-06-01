import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { Container, Table, Title, Section, Card, SubTitle } from './styles';

export function BancoDeDadosInfo () {
    return(
    <div>
        <Header  button="none"/>
        <SideBar/>

    
        <Container>
        <Title>Informações do Banco de Dados</Title>

        <Section>
            <SubTitle>🗃️ Dados Gerais</SubTitle>
            <Card>
            <p><strong>SGBD:</strong> MySQL</p>
            <p><strong>Versão:</strong> 8.0</p>
            <p><strong>Ferramenta:</strong> MySQL Workbench</p>
            <p><strong>Tipo:</strong> Relacional</p>
            </Card>
        </Section>

        <Section>
            <SubTitle>🔧 Tabela: hardware</SubTitle>
            <Card>
            <Table>
                <thead>
                <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>id_hardware</td><td>INT</td><td>Identificador único</td></tr>
                <tr><td>numero_ativo</td><td>VARCHAR(45)</td><td>Número do patrimônio</td></tr>
                <tr><td>tipo</td><td>VARCHAR(45)</td><td>Tipo de equipamento</td></tr>
                <tr><td>modelo</td><td>VARCHAR(45)</td><td>Modelo</td></tr>
                <tr><td>marca</td><td>VARCHAR(45)</td><td>Marca</td></tr>
                <tr><td>processador</td><td>VARCHAR(45)</td><td>Processador</td></tr>
                <tr><td>ram</td><td>VARCHAR(45)</td><td>Memória RAM</td></tr>
                <tr><td>armazenamento</td><td>VARCHAR(45)</td><td>Armazenamento</td></tr>
                <tr><td>data_aquisicao</td><td>DATETIME</td><td>Data de aquisição</td></tr>
                <tr><td>fornecedor</td><td>VARCHAR(45)</td><td>Fornecedor</td></tr>
                <tr><td>localizacao</td><td>VARCHAR(45)</td><td>Local de instalação</td></tr>
                <tr><td>usuario_responsavel</td><td>VARCHAR(45)</td><td>Responsável pelo ativo</td></tr>
                </tbody>
            </Table>
            </Card>
        </Section>

        <Section>
            <SubTitle>💻 Tabela: software</SubTitle>
            <Card>
            <Table>
                <thead>
                <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>id_software</td><td>INT</td><td>Identificador único</td></tr>
                <tr><td>nome</td><td>VARCHAR(45)</td><td>Nome do software</td></tr>
                <tr><td>versao</td><td>VARCHAR(45)</td><td>Versão</td></tr>
                <tr><td>fornecedor</td><td>VARCHAR(45)</td><td>Fornecedor</td></tr>
                <tr><td>codigo_licenca</td><td>VARCHAR(45)</td><td>Licença</td></tr>
                <tr><td>data_aquisicao</td><td>DATETIME</td><td>Aquisição</td></tr>
                <tr><td>data_expiracao</td><td>DATETIME</td><td>Expiração</td></tr>
                <tr><td>departamento</td><td>VARCHAR(45)</td><td>Departamento</td></tr>
                </tbody>
            </Table>
            </Card>
        </Section>

        <Section>
            <SubTitle>🌐 Tabela: rede</SubTitle>
            <Card>
            <Table>
                <thead>
                <tr>
                    <th>Campo</th>
                    <th>Tipo</th>
                    <th>Descrição</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>id_rede</td><td>INT</td><td>Identificador único</td></tr>
                <tr><td>tipo_equipamento</td><td>VARCHAR(45)</td><td>Tipo de equipamento</td></tr>
                <tr><td>marca</td><td>VARCHAR(45)</td><td>Marca</td></tr>
                <tr><td>modelo</td><td>VARCHAR(45)</td><td>Modelo</td></tr>
                <tr><td>numero_serie</td><td>VARCHAR(45)</td><td>Série</td></tr>
                <tr><td>endereco_ip</td><td>VARCHAR(45)</td><td>IP</td></tr>
                <tr><td>endereco_mac</td><td>VARCHAR(45)</td><td>MAC</td></tr>
                <tr><td>localizacao</td><td>VARCHAR(45)</td><td>Localização</td></tr>
                <tr><td>status</td><td>VARCHAR(45)</td><td>Status</td></tr>
                <tr><td>versao_firmware</td><td>VARCHAR(45)</td><td>Firmware</td></tr>
                <tr><td>responsavel</td><td>VARCHAR(45)</td><td>Responsável</td></tr>
                </tbody>
            </Table>
            </Card>
        </Section>
        </Container>
    </div>
    )
}