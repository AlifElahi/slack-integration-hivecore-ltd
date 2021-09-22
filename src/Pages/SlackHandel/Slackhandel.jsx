import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReactOidc } from '@axa-fr/react-oidc-context';
import { slackIntegration } from "./slackhandelService";



const Slackhandel = () => {
    const { oidcUser } = useReactOidc();
    let { id } = useParams();
    const [successFlag, setSuccessFlag] = useState(true);

    useEffect(async () => {
        let flag = await _slackIntegration();
        setSuccessFlag(flag)
        // _slackIntegration()
    }, [id])


    const _slackIntegration = async () => {
        let response = await slackIntegration(id, oidcUser.access_token)
        console.log(response);
        if (response.status !== 200) {
            return false
        }
        return true
    };

    return successFlag ?
            <main>
                <div
                    style={{
                        padding: '24px',
                        textTransform: "uppercase",
                        fontWeight: 'bold',
                        fontSize: 42,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Your Slack is now Integrated to Hive Ums
                </div>
                <div
                    style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: 24,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Hive-Ums powered by hivecore limited
                </div>
            </main> :
            <main>
                <div
                    style={{
                        padding: '24px',
                        textTransform: "uppercase",
                        fontWeight: 'bold',
                        fontSize: 42,
                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    OOps Something Went Worng
                </div>
                <div
                    style={{
                        textTransform: 'capitalize',
                        fontWeight: 'bold',
                        fontSize: 24,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    Try again latter
                </div>
            </main>



};

export default Slackhandel;
