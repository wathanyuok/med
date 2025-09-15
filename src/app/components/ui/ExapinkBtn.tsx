import React from 'react'

interface ExapinkBtnInterface {
  label?: string; 
}

function ExapinkBtn({label} : ExapinkBtnInterface) {
    return (
        <div>
            <div
                className="flex-1 border py-2 px-12 shadow text-neutral-100 rounded-full text-center cursor-pointer transition-transform hover:scale-105 duration-300"
                style={{ background: "var(--color-exa-tab)" }}
            >
                {label ?? ""}
            </div>
        </div>
    );
} 

export default ExapinkBtn;