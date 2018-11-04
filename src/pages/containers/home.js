import React, { Component } from "react";
import HomeLayout from "../components/home-layout";
import Categories from "../../categories/components/categories";
import Related from "../components/related-layout";
import ModalContainer from "../../widgets/containers/modal";
import Modal from "../../widgets/components/modal";
import HandleError from "../../error/containers/handle-error";
import VideoPlayer from "../../player/containers/video-player";

class Home extends Component {
    state = {
        modalVisible: false,
    }

    handleOpenModal = (event) => {
        this.setState({ modalVisible: true })
    }

    handleCloseModal = (event) => {
        this.setState({ modalVisible: false })
    }

    componentDidCatch(error, info){
        
    }

    render() {
       
        return (
            <HandleError>
                <HomeLayout>
                    <Related />
                    
                    <Categories 
                    handleOpenModal={this.handleOpenModal} 
                    categories={this.props.data.categories} />
                    <ModalContainer>
                        {   this.state.modalVisible &&
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer autoPlay={true}/>
                            </Modal> 
                        }
                    </ModalContainer>
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home