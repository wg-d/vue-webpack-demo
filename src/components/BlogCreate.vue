<template>
    <div class="createImage d-flex align-center ">
        <v-container>
                <v-form >
                  <v-sheet color="rgb(248 246 245 / 5%)" outlined>
                    <h2 class="text-center text-h2 yellow--text my-5">Blog Create</h2>
                    <v-row class="pa-5">
                        <v-col 
                        cols="12"
                        lg="6"
                        md="6">
                            <v-content >
                                <v-container fluid>
                                    <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                                    <img :src="imageUrl" height="200" v-if="imageUrl"/>
                                    <v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon="mdi-camera" dark></v-text-field>
                                    <input
                                        type="file"
                                        style="display: none"
                                        ref="image"
                                        accept="image/*"
                                        dark
                                        @change="onFilePicked"
                                    >
                                    </v-flex>
                                </v-container>
                            </v-content>
                        </v-col>
                        <v-col 
                        cols="12" 
                        lg="5" 
                        md="5">
                            <v-text-field
                            dark
                            outlined
                            filled
                            label="Blog title"
                            v-model="blog.title"
                            ></v-text-field>
                            <v-textarea
                            dark
                            outlined
                            rounded-xl
                            label="Blog text"
                            color="white"
                            v-model="blog.text"
                            ></v-textarea>
                            <v-btn 
                            @click.prevent="createBlog"
                            >Save</v-btn>
                        </v-col>
                    </v-row>
                    </v-sheet>
                </v-form>
        </v-container>
    </div>
</template>