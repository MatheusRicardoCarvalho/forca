import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import moment from 'moment';

interface CronometroProps {
    iniciado: boolean;
    onTempoDecorrido: (tempo: number) => void; // Função callback para passar o tempo decorrido
}

export function Cronometro({ iniciado, onTempoDecorrido }: CronometroProps) {
    const [tempoDecorrido, setTempoDecorrido] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (iniciado) {
            interval = setInterval(() => {
                setTempoDecorrido(prevTempo => {
                    const novoTempo = prevTempo + 1;
                    onTempoDecorrido(novoTempo);
                    return novoTempo;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [iniciado]);

    const tempoFormatado = () => {
        return moment.utc(tempoDecorrido * 1000).format('HH:mm:ss');
    };

    return (
        <Text>{tempoFormatado()}</Text>
    );
}
