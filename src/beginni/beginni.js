"use client";

import React, { useState, useEffect } from "react";
import { 
    AboutContainer, 
    AboutEstablishment, 
    Assessment, 
    AssessmentForm, 
    AssessmentTextArea, 
    AssessmentButton, 
    AssessmentRatingSelect, 
    ReviewList, 
    ReviewItem, 
    ReviewText, 
    ReviewRating,
    ReviewTimestamp,
    DeleteButton 
} from "./styled-beginni";

export function BeginniComponets(){
    const loadReviewsFromLocalStorage = () => {
        // No Next.js precisamos garantir que o código só acesse o localStorage se estiver rodando no navegador
        if (typeof window !== "undefined") {
            try {
                const storedReviews = localStorage.getItem('rodrigues_sanduiches_reviews');
                return storedReviews ? JSON.parse(storedReviews) : [];
            } catch (error) {
                console.error("Erro ao carregar avaliações do localStorage:", error);
                return [];
            }
        }
        return [];
    };
    
    const [reviews, setReviews] = useState(loadReviewsFromLocalStorage);
    const [newReviewText, setNewReviewText] = useState("");
    const [newReviewRating, setNewReviewRating] = useState(5);

    useEffect(() => {
        if (typeof window !== "undefined") {
            try {
                localStorage.setItem('rodrigues_sanduiches_reviews', JSON.stringify(reviews));
            } catch (error) {
                console.error("Erro ao salvar avaliações no localStorage:", error);
            }
        }
    }, [reviews]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = Date.now();
            const thirtyMinutesAgo = now - (30 * 60 * 1000);

            setReviews(currentReviews => 
                currentReviews.filter(review => 
                    review.rating > 2 || review.timestamp > thirtyMinutesAgo
                )
            );
        }, 60000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newReviewText.trim() === "") return;

        const newReview = {
            id: Date.now(),
            text: newReviewText,
            rating: parseInt(newReviewRating),
            timestamp: Date.now(),
        };

        setReviews(prevReviews => [...prevReviews, newReview]);
        setNewReviewText("");
        setNewReviewRating(5);
    };

    const handleDelete = (idToDelete) => {
        setReviews(currentReviews => 
            currentReviews.filter(review => review.id !== idToDelete)
        );
    };

    const sortedAndFilteredReviews = reviews
        .sort((a, b) => b.timestamp - a.timestamp);

    return(
        <AboutContainer>
            <AboutEstablishment>
                <h2>Sobre o Rodrigues Sanduíches</h2>
                <p>Aqui você pode adicionar uma breve descrição do seu estabelecimento...</p>
            </AboutEstablishment>
            
            <Assessment>
                <h3>Avaliações dos Clientes</h3>
                <AssessmentForm onSubmit={handleSubmit}>
                    <AssessmentTextArea
                        placeholder="Deixe sua avaliação aqui..."
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                    />
                    <AssessmentRatingSelect
                        value={newReviewRating}
                        onChange={(e) => setNewReviewRating(e.target.value)}
                    >
                        <option value="5">⭐⭐⭐⭐⭐</option>
                        <option value="4">⭐⭐⭐⭐</option>
                        <option value="3">⭐⭐⭐</option>
                        <option value="2">⭐⭐</option>
                        <option value="1">⭐</option>
                    </AssessmentRatingSelect>
                    <AssessmentButton type="submit">Enviar Avaliação</AssessmentButton>
                </AssessmentForm>
                <ReviewList>
                    {sortedAndFilteredReviews.map(review => (
                        <ReviewItem key={review.id}>
                            <DeleteButton onClick={() => handleDelete(review.id)}>X</DeleteButton>
                            
                            <ReviewRating>{'⭐'.repeat(review.rating)}</ReviewRating>
                            <ReviewText>{review.text}</ReviewText>
                            <ReviewTimestamp>
                                Postado há {Math.floor((Date.now() - review.timestamp) / 60000)} minutos
                            </ReviewTimestamp>
                        </ReviewItem>
                    ))}
                </ReviewList>
            </Assessment>
        </AboutContainer>
    )
}