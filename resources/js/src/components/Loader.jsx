import {Puff} from "react-loader-spinner";

export default function loader ({show}) {
    return (
        <div>
            {
            show && <div className={'fixed flex w-full h-full backdrop-blur-sm z-10 items-center justify-center'}>
                <div>
                    <Puff
                        height="80"
                        width="80"
                        radius={1}
                        color="#CF212F"
                        ariaLabel="puff-loading"
                        wrapperClass=""
                        visible={show}
                    />
                </div>
            </div>
        }
        </div>
    );
};
