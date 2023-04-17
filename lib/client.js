import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client=sanityClient({
    projectId:"mhyqhff8",
    dataset:"production",
    apiVersion:"2023-03-23",
    useCdn:true,
    token:process.env.SANITY_PUBLIC_API_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);