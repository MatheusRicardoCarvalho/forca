import { useState } from "react";
import { Pressable, View, Text, TextInput } from "react-native";
import { stylesModal } from "@/src/assets/styles/modal";

interface ModalProps {
    setModalVisible: (visible: boolean) => void;
    modalVisible: boolean;
    palavraCorreta: string; // Palavra correta para validação
    onValidarPalavra: (tentativa: string) => void; // Função para validar a palavra
}

export default function ModalEuSei({ setModalVisible, modalVisible, palavraCorreta, onValidarPalavra }: ModalProps) {
    const [tentativa, setTentativa] = useState('');

    const handleSubmit = () => {
        onValidarPalavra(tentativa); // Chama a função de validação da palavra
        setTentativa(''); // Limpa o campo de texto
        setModalVisible(false); // Fecha o modal após a tentativa
    };

    return (
        <View style={stylesModal.centeredView}>
            <View style={stylesModal.modalView}>
                <Text style={stylesModal.modalText}>Tente adivinhar a palavra completa:</Text>
                <TextInput
                    style={stylesModal.input}
                    placeholder="Digite sua tentativa"
                    value={tentativa}
                    onChangeText={setTentativa}
                />
                <Pressable
                    style={[stylesModal.button, stylesModal.buttonClose]}
                    onPress={handleSubmit} // Envia a tentativa ao pressionar
                >
                    <Text style={stylesModal.textStyle}>Enviar</Text>
                </Pressable>
                <Pressable
                    style={[stylesModal.button, stylesModal.buttonClose]}
                    onPress={() => setModalVisible(false)}
                >
                    <Text style={stylesModal.textStyle}>Fechar</Text>
                </Pressable>
            </View>
        </View>
    );
}
