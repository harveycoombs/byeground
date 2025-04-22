"use client";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import Panel from "@/app/components/common/Panel";
import Button from "@/app/components/common/Button";

export default function Home() {
    const [file, setFile] = useState<File|null>(null);
    const [result, setResult] = useState<string|null>(null);

    const uploader = useRef<HTMLInputElement>(null);

    async function removeBackground() {
        if (!file) return;

        const response = await fetch("/api/remove", {
            method: "POST",
            body: file
        });

        const data = await response.blob();
        const url = URL.createObjectURL(data);

        setResult(url);
    }

    return (
        <main className="w-500 mt-10">
            <Panel title="Upload" classes="w-full">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Button onClick={() => uploader.current?.click()}><FontAwesomeIcon icon={faUpload} /> Choose File</Button>
                        <div className="text-sm font-medium text-slate-500">{file ? file.name : "No File Chosen"}</div>

                        <input ref={uploader} type="file" className="hidden" onChange={(e: any) => setFile(e.target.files[0])} />
                    </div>

                    {file && <div className="text-slate-400 cursor-pointer duration-150 hover:text-red-500 active:text-red-600" title="Remove File" onClick={() => setFile(null)}><FontAwesomeIcon icon={faTrashAlt} /></div>}
                </div>
            </Panel>

            <Panel title="Result" classes="w-full mt-6">
                <div className="rounded-md aspect-square overflow-hidden relative">
                    {
                    result ? <img src={result} alt="Result" className="w-full h-full object-cover" />
                    : file ? <Button classes="absolute inset-0 w-fit h-fit m-auto" onClick={removeBackground}>Remove Background</Button>
                    : <div className="absolute inset-0 w-fit h-fit m-auto select-none text-slate-400/75">Result will appear here</div>}
                </div>
            </Panel>
        </main>
    );
}