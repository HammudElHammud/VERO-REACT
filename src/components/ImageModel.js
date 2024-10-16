import React, {useState, useRef, useEffect} from 'react'
import ModalComponent from "./ModelComponent";


const ImageModel = (props) => {
    const [imageUpdating, setImageUpdating] = useState(null)
    const fileInputRef = useRef(null);


    const onValueChangedImage = (e) => {
        setImageUpdating(e.target.files[0])
    }

    useEffect(() => {

    }, [imageUpdating])

    const onClickToSave = () => {

        // will do the save here

    }


    return (
        <>
            <ModalComponent
                isOpen={props.isOpen}
                setIsOpen={props.setIsOpen}
            >
                <div className='modal-content-class'>
                    <div
                        className="col-lg-12 col-md-12 col-12 d-flex justify-content-between modal-header px-0 mx-0 pt-0 w-100">
                        <h5 className="modal-title w-100 ml-3">
                            Upload Image Model
                        </h5>
                        <i
                            style={{fontSize: '20px'}}
                            onClick={() => {
                                setImageUpdating(null)
                                props.setIsOpen(false)
                            }}
                            className="far fa-times-circle cursor-pointer mr-3"
                        />
                    </div>
                    <div className='modal-body'>

                        <div className="layout-container flex h-full grow flex-col">
                            <div className="flex flex-1 justify-center">
                                <div
                                    className="layout-content-container flex flex-col w-[512px] max-w-[512px] max-w-[960px] flex-1">
                                    <div className="flex flex-col p-4">
                                        <div
                                            className="flex flex-col items-center gap-1 rounded-xl border-2 border-dashed border-[#d0dbe7] px-3 py-4">
                                            <p className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">Drag
                                                files here to upload</p>
                                            <button
                                                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]"
                                                onClick={() => {
                                                    fileInputRef.current.click()
                                                }}
                                            >
                                                <span className="truncate">Select from computer</span>
                                            </button>
                                            <input
                                                className="form-control"
                                                name="imgUrl"
                                                ref={fileInputRef}
                                                type="file"
                                                accept="image/*"
                                                style={{display: 'none'}}
                                                onChange={(e) => onValueChangedImage(e)}
                                                placeholder="Image"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex px-4 py-3">
                                        <div
                                            className="w-100 mb-3 d-flex justify-content-center text-center position-relative">
                                            {
                                                imageUpdating !== null ?
                                                    <>
                                                        <img
                                                            className="uploaded-image"
                                                            src={imageUpdating !== null ? URL?.createObjectURL(imageUpdating) : ''}
                                                            alt=""
                                                        />
                                                        <div className='position-absolute mt-0 remove-image'>
                                                            <i className='far fa-times-circle cursor-pointer'
                                                             onClick={()=> setImageUpdating(null)}
                                                            ></i>
                                                        </div>
                                                    </> : null
                                            }

                                        </div>
                                    </div>
                                    <div className="flex px-4 py-3 d-flex justify-content-between text-center gap-2">
                                        <button
                                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center
                                             justify-center overflow-hidden
                                              rounded-xl h-10 px-4 flex-1 bg-[#e7edf3]
                                               text-[#0e141b] text-sm font-bold leading-normal
                                               pointer-event
                                                tracking-[0.015em]"
                                            onClick={() => {
                                                setImageUpdating(null)
                                                props.setIsOpen(false)
                                            }}
                                        >
                                            <span className="truncate">Cancel</span>
                                        </button>
                                        <button
                                            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center
                                             justify-center overflow-hidden
                                              rounded-xl h-10 px-4 flex-1 bg-[#131c24]
                                               text-[#F8F9FB] text-sm font-bold leading-normal
                                               pointer-event
                                                tracking-[0.015em]"
                                            onClick={onClickToSave}
                                        >
                                            <span className="truncate">Save</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalComponent>
        </>
    )
}

export default ImageModel